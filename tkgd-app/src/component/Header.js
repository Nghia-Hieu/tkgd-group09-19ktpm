import { Typography } from '@mui/material';
import logo from '../icon/logo.svg';
import iconLogOut from '../icon/logout.svg'



function Header(){
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];
    return(
        <div className='flex flex-row justify-between items-center px-10 space-x-10' style={{height: 80, backgroundColor:'#F89800'}}>
            <div className='flex flex-row space-x-3'>
                <img src={logo} alt="Logo" />
                <Typography className='font-semibold' style={{fontSize: 30}}>G-hub</Typography>
            </div>
            {/* <Typography className=' >Trang chủ</Typography>
            <Typography className='font-bold' style={{fontSize: 20}} >Phân loại</Typography>
            <Typography className='font-bold' style={{fontSize: 20}} >Review</Typography>
            <Typography className='font-bold' style={{fontSize: 20}} >Tin hot & Sự kiện</Typography>
            <Typography className='font-bold' style={{fontSize: 20}} >Feedback</Typography>
            <Typography className='font-bold' style={{fontSize: 20}} >Đăng bài</Typography> */}
            <div class="flex flex-grow justify-between items-center">
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block" id="mobile-menu">
                    <ul class="flex flex-col mt-4 md:flex-row md:justify-between md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Typography class="text-black font-semibold" style={{fontSize: 20}} >Trang chủ</Typography>
                        </li>
                        <li>
                            <Typography class="text-black font-semibold" style={{fontSize: 20}}>Phân loại</Typography>
                        </li>
                        <li>
                            <Typography class="text-black font-semibold" style={{fontSize: 20}}>Review</Typography>
                        </li>
                        <li>
                            <Typography class="text-black font-semibold" style={{fontSize: 20}}>Tin hot & Sự kiện</Typography>
                        </li>
                        <li>
                            <Typography class="text-black font-semibold" style={{fontSize: 20}}>Feedback</Typography>
                        </li>
                        <li>
                            <Typography class="text-black font-semibold" style={{fontSize: 20}}>Đăng bài</Typography>
                        </li>
                    </ul>
                </div>
            </div>
            <form class="flex items-center">   
                <label class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3">
                        <button type="submit" class=" rounded-full text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black" placeholder="Search" required />
                </div>
            </form>
            <img src={iconLogOut} alt="iconLogOut" style={{width:40, height:40}} />

        </ div>
    );

}
export default Header;