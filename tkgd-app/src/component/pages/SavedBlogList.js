import {Box, Typography } from '@mui/material';
import { useState } from 'react';
import avt from '../../assets/avatar/BlogList1.svg';

import avt2 from '../../assets/avatar/BlogList2.svg';

import Slide1 from './PersonalBlogComponent/Slide1';
import Slide2 from './PersonalBlogComponent/Slide2';
import BG from '../../assets/Pictures/BlogList/backGround.svg';
import saved from '../../assets/Icons/saved.svg'


import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export default function BlogList(){
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return(
        <Box className='flex flex-col space-y-10 pt-5 px-5' >
            <Typography className="pl-20 text-left font-bold" style={{fontSize: 30, fontWeight: 700}} variant='category' >Danh sách các bài viết đã lưu</Typography>
            <Box 
                className='flex flex-col pb-10 px-10 space-y-10 justify-center items-center'
                style={{backgroundImage:`url(${BG})`, backgroundSize: 'cover'}}
            >
                {page===1 && <Slide1 name='Quang Thông' miniavt={avt} saved={saved}/>}
                {page===2 && <Slide2 name='Thanh Mai' miniavt={avt2} saved={saved}/>}
                <Pagination
                    count={10}
                    color="primary"
                    onChange={handleChange}

                    renderItem={(items) => (
                    <PaginationItem
                        sx={{height:'55px', width:'55px', borderRadius:'50px', fontWeight:'400', fontSize:'28px', marginRight:'25px'}}
                        {...items}
                    />
                    )}
                />
            </Box>
        </Box>
    );
}