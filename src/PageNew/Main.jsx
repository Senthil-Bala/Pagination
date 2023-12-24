import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import Pagination from "./Pagination"

function Main() {
    const [items, setItems] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage] = useState(10);

 

    useEffect(() => {

        axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')

            .then(response => {

                setItems(response.data);
                console.log(response.data);

            })

            .catch(error => {

                alert("Failed to fetch data")

            });

    }, []);

 

    // Get current items

    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

 

    // Change page

    const paginate = pageNumber => setCurrentPage(pageNumber);

return (

        <div>

        <h1>Employee Data Table</h1>

            <DataTable currentItems={currentItems} />

            {/* <Pagination currentPage={currentPage}

                itemsPerPage={itemsPerPage} 

                totalItems={items.length} 

                paginate={paginate}  /> */}

        </div>

    );

};


export default Main