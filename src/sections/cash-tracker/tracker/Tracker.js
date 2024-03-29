import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailTable from './DetailTable';
import dynamic from 'next/dynamic';
import { useCashTrackerContext } from '@contexts/cash-tracker';
import { BeneficiaryService } from '@services/beneficiaries';
import SummaryTracker from './SummaryTracker';
import { Skeleton, Stack, Typography } from '@mui/material';
import Stats from './Stats';

const TreeTracker = dynamic(() => import('@components/tree/TreeOrganization'), { ssr: false });

let tree = [
  {
    nodeName: '',
    childNode: [],
  },
];

const Tracker = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [loadTreeData, setLoadTreeData] = useState(true);
  const [treeData, setTreeData] = useState(tree);
  const [cashSummaryData, setCashSummaryData] = useState({});

  const { beneficiariesByWard, getBeneficiariesByWard, vendorByWard } = useCashTrackerContext();

  const handleNodeClick = async (node) => {
    if (!node.id) return;
    setSelectedNode(node);

    await getBeneficiariesByWard(node.id);
  };

  const buildTreeData = useCallback(async () => {
    const response = await BeneficiaryService.getAllWards();
    tree[0].childNode = response.data
      .sort((a, b) => a - b)
      .map((w) => ({
        nodeName: `Ward ${w}`,
        balance: 1000,
        disbursed: 1000,
        id: w,
      }));
    setTreeData(tree);
    setLoadTreeData(false);
  }, [tree]);

  useEffect(() => {
    buildTreeData();
  }, [buildTreeData, treeData]);

  return (
    <div style={{ paddingTop: 15 }}>
      <SummaryTracker setCashSummaryData={setCashSummaryData} />
      {loadTreeData ? (
        <>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </>
      ) : (
        <>
          <TreeTracker tree={treeData} onNodeClick={handleNodeClick} selectedNode={selectedNode} />
          {selectedNode && (
            <>
              <Stats vendor={vendorByWard} beneficiary={beneficiariesByWard} />
              <DetailTable selectedNode={selectedNode} list={beneficiariesByWard.data} />
            </>
          )}
          {!selectedNode && (
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%', p: 2, mt: 3 }}>
              <Typography variant="body3">Please select a node from the tree to view details</Typography>
            </Stack>
          )}
        </>
      )}
    </div>
  );
};

Tracker.propTypes = {};

export default Tracker;
