export const getProfile = state => state.profile.wallet;
export const getIsProfileFilled = state =>  Object.keys(state.profile.wallet).length > 0;