// Get home page data
export async function getHomePageData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/home`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

// Get site info
export async function getSiteInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/site_info`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

// First Banner
export async function getFirstBanner() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/first/banner`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

// Get session details
export async function getSessionList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/session/list`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

// Get session details
export const getSessionDetails = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/session/details/${slug}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get package list
export const getPackageList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/package/list`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get package Details
export const getPackageDetails = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/package/details/${slug}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get Blog list
export const getBlogList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/list`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get Blog Details
export const getBlogDetails = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/details/${slug}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get Gallery List
export const getGalleryList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/gallery/list`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get Gallery List
export const getPrtfolioList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/portfolio/list`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

// Get Gallery List
export const getAboutPageData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/about`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};
