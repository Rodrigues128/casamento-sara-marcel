// Mock API Client to replace Base44 SDK
export const apiClient = {
  entities: {
    RSVP: {
      create: async (data) => {
        console.log('Mock RSVP created:', data);
        return { success: true, data };
      }
    }
  },
  auth: {
    me: async () => {
      console.log('Mock Auth Me called');
      return { id: 'mock-user', name: 'Convidado' };
    },
    logout: async () => {
      console.log('Mock Logout called');
    },
    redirectToLogin: () => {
      console.log('Mock Redirect to Login');
    }
  }
};
