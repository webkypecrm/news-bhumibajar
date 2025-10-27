import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Custom flag to skip token
    if (config.headers?.skipAuth) {
      delete config.headers.skipAuth;
      return config;
    }

    const token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const errorBody = (err) => {
  if (err.response) {
    return {
      message: err.response.data.message || "An error occurred",
      status: err.response.status,
    };
  }
  return {
    message: err.message,
    status: 500,
  };
};

export const request = {
  get: (url, responseType = "json", headers = {}) =>
    axiosInstance
      .get(url, { responseType, headers })
      .then((data) => data)
      .catch(errorBody),

  post: (url, body, headers = {}) => {
    const isFormData = body instanceof FormData;
    return axiosInstance
      .post(url, body, {
        headers: {
          "Content-Type": isFormData
            ? "multipart/form-data"
            : "application/json",
          ...headers,
        },
      })
      .then((data) => data)
      .catch(errorBody);
  },

  put: (url, body, headers = {}) => {
    const isFormData = body instanceof FormData;
    return axiosInstance
      .put(url, body, {
        headers: {
          "Content-Type": isFormData
            ? "multipart/form-data"
            : "application/json",
          ...headers,
        },
      })
      .then((data) => data)
      .catch(errorBody);
  },

  delete: (url) =>
    axiosInstance
      .delete(url)
      .then((data) => data)
      .catch(errorBody),
};

// header
export const NewsList = {
  getCategoryData: () =>
    request.post("/blogSubCat/getCategories", {}, { skipAuth: true }),
  getNewsList: () => request.get("/blog/getBlog", "json", { skipAuth: true }),
  getNewsCatSubCatList: (name, slug) =>
    request.get(`blog/getBlogBytype?type=${name}&slug=${slug}`, "json", {
      skipAuth: true,
    }),
  getNewsCatSubCatTagList: (name, slug) =>
    request.get(`blog/getBlogBytype?type=${name}&slug=${slug}`, "json", {
      skipAuth: true,
    }),

  // listing pagination api
  getNewsListingCatSubCatList: (name, slug, newsLimit) =>
    request.get(
      `blog/categoryDescription?type=${name}&slug=${slug}&page=${1}&limit=${newsLimit}`,
      "json",
      {
        skipAuth: true,
      }
    ),
  // listing pagination api

  getNewsCatSubCatListMain: () =>
    request.get(`blog/getBlogBytype`, "json", {
      skipAuth: true,
    }),

  getNewsPopularRecentList: (limit) =>
    request.get(`blog/getPopularBlogs?page=${1}&limit=${limit}`, "json", {
      skipAuth: true,
    }),

  getNewsPopularRecentScrollerList: (limit, page = 1) =>
    request.get(`blog/getPopularBlogs?page=${page}&limit=${limit}`, "json", {
      skipAuth: true,
    }),

  getCategoryPopularRecentList: (name, slug) =>
    request.get(
      `blog/getPopularBlogsByType?type=${name}&slug=${slug}&page=${1}&limit=${20}`,
      "json",
      {
        skipAuth: true,
      }
    ),

  getNewsRecentList: (limit, page = 1) =>
    request.get(`blog/getRecentBlogs?limit=${limit}&page=${page}`, "json", {
      skipAuth: true,
    }),

  getNewsFeaturePostList: () =>
    request.get(`blog/getBlogByNewstype?newsType=Feature Post`, "json", {
      skipAuth: true,
    }),

  getNewLaunchProjectList: () =>
    request.get(`blog/getBlogByNewstype?newsType=New Launch Project`, "json", {
      skipAuth: true,
    }),

  getWebStoriesList: () =>
    request.get(`blog/getBlogByNewstype?newsType=Web Stories`, "json", {
      skipAuth: true,
    }),
  getCatBasedNewsList: () =>
    request.get(`blogCat/listForWeb`, "json", {
      skipAuth: true,
    }),

  getSearchNewsList: (search) =>
    request.get(`blog/searchBlog?data=${search}`, "json", {
      skipAuth: true,
    }),

  getTagList: (tag) =>
    request.get(`blog/getBlogByTag?tag=${tag}&page=1&limit=10`, "json", {
      skipAuth: true,
    }),
};
// header
