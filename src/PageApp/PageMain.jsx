import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PageTable from "./PageTable";
import Pagination from "./Pagination";
import "./Page.css";
function PageMain() {
  const [datas, setdatas] = useState([]);
  const [presentPage, setpresentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const [errorMessage, seterrorMessage] = useState(null);

  const getData = async()=>{
    try{
        let fetchingdata=await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        let jsonFormat=await fetchingdata.json();
        console.log(jsonFormat)
        setdatas(jsonFormat);
        seterrorMessage(null)
    }
    catch(e){
        console.log(e);
        setdatas([])
        alert("failed to fetch data");
    }
  }

  useEffect(() => {

    getData();
    // axios
    //   .get(
    //     "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    //   )
    //   .then((res) => {
    //     setdatas(res.data);
    //     console.log(res.data);
    //     seterrorMessage(null);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setdatas([]);
    //     alert("failed to fetch data");
    //   });
  }, []);


//   useEffect(() => {

//     axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')

//         .then(response => {

//             setdatas(response.data);
//             console.log(response.data);

//         })

//         .catch(error => {

//             alert("Failed to fetch data")

//         });

// }, []);
  // page per posts

  const lastIndex = postsPerPage * presentPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = datas?.slice(firstIndex, lastIndex);

  // pagination

  // const paginate= pageNumber => setpresentPage(pageNumber)

  const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(datas?.length / postsPerPage)
    ) {
      setpresentPage(pageNumber);
    }
  };

  return (
    <div>
      <h4 className="text-center m-4">Employee Data Table</h4>
      {errorMessage && <h2>{errorMessage}</h2>}
      <PageTable datas={currentPosts} />
      <Pagination
        paginate={paginate}
        totalPosts={datas.length}
        postsPerPage={postsPerPage}
        currentPage={presentPage}
      />
    </div>
  );
}

export default PageMain;
