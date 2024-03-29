import { DashboardService, ProjectService, ReportingService } from '@services';
import { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  projects: [],
  singleProject: {},
  beneficiaries: [],
  vendors: [],
  refresh: false,
  isRahatResponseLive: false,
  error: {},
  projectSummary: {},
  distributionSummary: {
    issuedToBanked: 0,
    issuedToUnbanked: 0,
    cashToBanked: 0,
    cashToUnbanked: 0,
  },
  getProjectsList: () => {},
  getProjectById: () => {},
  getBeneficiariesByProject: () => {},
  getVendorsByProject: () => {},
  refreshData: () => {},
  setRahatResponseStatus: () => {},
  getProjectReportSummary: () => {},
  getDistributionSummary: () => {},
};

const ProjectsContext = createContext(initialState);

export const ProjectProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const refreshData = () => setState((prev) => ({ ...prev, refresh: !prev.refresh }));
  const setRahatResponseStatus = (isRahatResponseLive) => setState((prev) => ({ ...prev, isRahatResponseLive }));

  const getProjectReportSummary = useCallback(async (projectId) => {
    const response = await ReportingService.getBeneficiariesCounts();

    const impacted = {
      ...response?.data?.data?.impacted,
    };

    setState((prev) => ({
      ...prev,
      projectSummary: impacted,
    }));

    return impacted;
  }, []);

  const getProjectsList = useCallback(async (params) => {
    const response = await ProjectService.getProjectsList(params);
    const formatted = response.data.data.map((item) => ({
      ...item,
      projectManager: item?.project_manager?.name
        ? `${item?.project_manager?.name?.first} ${item?.project_manager?.name?.last}`
        : '-',
      createdAt: item?.created_at,
      balance: item?.tokenBalance || 0,
      id: item?._id || item?.id,
    }));

    setState((prevState) => ({
      ...prevState,
      projects: formatted,
    }));
    return formatted;
  }, []);

  const getProjectById = useCallback(async (id) => {
    const response = await ProjectService.getProjectById(id);

    const formatted = {
      ...response.data,
      projectManagerName: response.data?.project_manager?.name
        ? `${response.data?.project_manager?.name?.first} ${response.data?.project_manager?.name?.last}`
        : '-',
      projectCreatedAt: response.data?.project_manager?.created_at,
    };

    setState((prev) => ({
      ...prev,
      singleProject: formatted,
    }));
    return formatted;
  }, []);

  const getBeneficiariesByProject = useCallback(async (projectId) => {
    const response = await ProjectService.getBeneficiariesByProject(projectId);

    const formatted = response.data.data;

    setState((prev) => ({
      ...prev,
      beneficiaries: formatted,
    }));
    return formatted;
  }, []);

  const getVendorsByProject = useCallback(async (projectId) => {
    const response = await ProjectService.getVendorsByProject(projectId);

    const formatted = response.data.data;

    setState((prev) => ({
      ...prev,
      vendors: formatted,
    }));
    return formatted;
  }, []);

  const getDistributionSummary = useCallback(async (projectId) => {
    const { data } = await ReportingService.getDistributionSummary();
    setState((prev) => ({
      ...prev,
      distributionSummary: data.data,
    }));
    return data.data;
  }, []);

  const contextValue = {
    ...state,
    refreshData,
    setRahatResponseStatus,
    getProjectsList,
    getProjectById,
    getBeneficiariesByProject,
    getVendorsByProject,
    getProjectReportSummary,
    getDistributionSummary,
  };

  return <ProjectsContext.Provider value={contextValue}>{children}</ProjectsContext.Provider>;
};

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProjectContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};
