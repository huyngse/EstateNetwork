// import { axiosClient } from './config/axios-client';
import { propertyPosts } from "@/constants/propertyData"; 
export const handleApiError = (error: any) => {
  try {
    const errorMessage = error.response?.data || 'An unexpected error occurred.';
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error('An unexpected error occurred.');
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const data: any = {
        success: false,
        data: null,
    }
    const property = propertyPosts.find((x) => x.id == parseInt(id));
    if (property != null) {
        data.success = true;
        data.data = property;
    }
    return { error: null, data: data };
  } catch (error) {
    return handleApiError(error);
  }
}
