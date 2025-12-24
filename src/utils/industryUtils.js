// Helper function to generate slug from industry name
export const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper function to get Unsplash image URL for industries
export const getIndustryImage = (industryName) => {
  const imageMap = {
    'Banking & Financial Services': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80',
    'Healthcare & Life Sciences': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
    'Media & Entertainment': 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80',
    'Telecommunications': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    'Energy & Utilities': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80',
    'Oil & Gas': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80',
    'Retail & Consumer Goods': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
    'Manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    'Transportation & Logistics': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1600&q=80',
    'Travel & Hospitality': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80',
    'Automotive': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80',
    'Education': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
    'Government & Public Sector': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    'Insurance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
  };
  
  return imageMap[industryName] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80';
};

// Helper function to get Unsplash image URL for technologies
export const getTechnologyImage = (technologyName) => {
  const imageMap = {
    'AI & Machine Learning': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80',
    'Cloud Computing': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    'DevOps': 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1600&q=80',
    'Big Data Technologies': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
    'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
    'IoT': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80',
    'Android Development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80',
    'Java/Python Full Stack': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80',
    'ServiceNow': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80',
    'Business/Data Analyst': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    'QA Engineer': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    'Data Science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    'Salesforce': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
  };
  
  return imageMap[technologyName] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80';
};

