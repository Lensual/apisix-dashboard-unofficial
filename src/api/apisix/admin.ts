import axios, { InternalAxiosRequestConfig } from 'axios';

import { useUserStore } from '@/store';

import * as admin from './admin/typescript-axios';

const axiosInstance = axios.create();

const userStore = useUserStore();

axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  config.baseURL = userStore.apisixAdminEndpoint;
  config.headers.set('X-API-Key', userStore.apisixAdminKey);
  return config;
});

export const ProtoApi = admin.ProtoApiFactory(undefined, '', axiosInstance);

export const RouteApi = admin.RouteApiFactory(undefined, '', axiosInstance);

export const PluginApi = admin.PluginApiFactory(undefined, '', axiosInstance);

export const SecretApi = admin.SecretApiFactory(undefined, '', axiosInstance);

export const ServiceApi = admin.ServiceApiFactory(undefined, '', axiosInstance);

export const ConsumerApi = admin.ConsumerApiFactory(undefined, '', axiosInstance);

export const UpstreamApi = admin.UpstreamApiFactory(undefined, '', axiosInstance);

export const SSLApi = admin.SSLApiFactory(undefined, '', axiosInstance);

export const GlobalRuleApi = admin.GlobalRuleApiFactory(undefined, '', axiosInstance);

export const StreamRouteApi = admin.StreamRouteApiFactory(undefined, '', axiosInstance);

export const PluginConfigApi = admin.PluginConfigApiFactory(undefined, '', axiosInstance);

export const ConsumerGroupApi = admin.ConsumerGroupApiFactory(undefined, '', axiosInstance);

export const PluginMetadataApi = admin.PluginMetadataApiFactory(undefined, '', axiosInstance);
export const SchemaValidationApi = admin.SchemaValidationApiFactory(undefined, '', axiosInstance);