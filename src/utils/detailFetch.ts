import { urlAxios } from ".";

const detailFetch = async (
  id: string | undefined,
  detail: object,
  setDetail: Function
) => {
  try {
    const { data } = await urlAxios.get(`/product/${id}`);
    setDetail({ detail, ...data });
  } catch (error) {
    console.error(error);
  }
};

export default detailFetch;
