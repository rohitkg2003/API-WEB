import React from 'react';

async function Api() {
    try {
      const result = await fetch("https://randomuser.me/api/");
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error(error);
    }
};
  
export default Api;