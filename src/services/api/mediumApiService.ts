import { baseApiService } from '../baseApiService';
import { GetUserIdRes, GetUserIdReq } from '../models/medium';

export const sampleApi = baseApiService.injectEndpoints({
  endpoints: (builder) => ({
    GetUserId: builder.mutation<GetUserIdRes, GetUserIdReq>({
      query: (req) => ({
        url: `/user/id_for/${req.userName}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});
