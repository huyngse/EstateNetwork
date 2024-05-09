// import { axiosClient } from './config/axios-client';

export const handleApiError = (error: any) => {
  try {
    const errorMessage = error.response?.data || 'An unexpected error occurred.';
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error('An unexpected error occurred.');
  }
};

export const login = async (email: string, password: string) => {
  try {
    // const { data } = await axiosClient.get(`/api/${id}`);
    const data: any = {
      success: false,
      data: null
    }
    if (email == "renter@gmail.com" && password == "123456") {
      data.success = true;
      data.data = {
        userRole: "renter"
      }
    }
    if (email == "admin@gmail.com" && password == "123456") {
      data.success = true;
      data.data = {
        userRole: "admin"
      }
    }
    if (email == "owner@gmail.com" && password == "123456") {
      data.success = true;
      data.data = {
        userRole: "owner"
      }
    }
    return { error: null, data: data, success: true };
  } catch (error) {
    return handleApiError(error);
  }
}
