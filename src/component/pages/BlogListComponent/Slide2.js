import { Box, Typography, IconButton, Paper  } from '@mui/material';
import { Link } from 'react-router-dom';
import avt from '../../../assets/avatar/BlogList2.svg';
import blogListThumbnail from '../../../assets/Pictures/BlogList/blogListThumbnail2.svg'
import heartReact from '../../../assets/Icons/heartReact.svg';
import bookMark from '../../../assets/Icons/bookMark.svg'

export default function Slide1(){
    return(
        <Box className='grid grid-rows-4 gap-y-14'>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Tuấn Tú</Typography>
                        <Typography style={{textColor:'primary'}} >17.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <img src={blogListThumbnail} alt='blogListThumbnail' />
                <Box className='text-left space-y-5'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Top đội hình DTCL mùa 7, đội hình mạnh DTCL 12.11</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong danh sách đội hình mạnh Đấu Trường Chân Lý ở dưới đây, có những đội hình sẽ sử dụng Slowroll và Hyperroll, đây là hai kiểu chiến thuật thường được game ...</Typography>
                    
                </Box>
                <Link href="#">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>2.2K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>18 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Tuấn Tú</Typography>
                        <Typography style={{textColor:'primary'}} >17.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <img src={blogListThumbnail} alt='blogListThumbnail' />
                <Box className='text-left space-y-5'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Top đội hình DTCL mùa 7, đội hình mạnh DTCL 12.11</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong danh sách đội hình mạnh Đấu Trường Chân Lý ở dưới đây, có những đội hình sẽ sử dụng Slowroll và Hyperroll, đây là hai kiểu chiến thuật thường được game ...</Typography>
                    
                </Box>
                <Link href="#">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>2.2K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>18 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Tuấn Tú</Typography>
                        <Typography style={{textColor:'primary'}} >17.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <img src={blogListThumbnail} alt='blogListThumbnail' />
                <Box className='text-left space-y-5'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Top đội hình DTCL mùa 7, đội hình mạnh DTCL 12.11</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong danh sách đội hình mạnh Đấu Trường Chân Lý ở dưới đây, có những đội hình sẽ sử dụng Slowroll và Hyperroll, đây là hai kiểu chiến thuật thường được game ...</Typography>
                    
                </Box>
                <Link href="#">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Tuấn Tú</Typography>
                        <Typography style={{textColor:'primary'}} >17.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <img src={blogListThumbnail} alt='blogListThumbnail' />
                <Box className='text-left space-y-5'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Top đội hình DTCL mùa 7, đội hình mạnh DTCL 12.11</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong danh sách đội hình mạnh Đấu Trường Chân Lý ở dưới đây, có những đội hình sẽ sử dụng Slowroll và Hyperroll, đây là hai kiểu chiến thuật thường được game ...</Typography>
                    
                </Box>
                <Link href="#">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
}