import { Typography, Box, Button } from '@mui/material';
import phone from '../../assets/Icons/phone.svg';
import mail from '../../assets/Icons/mail.svg';
import locate from '../../assets/Icons/locate.svg';
import TextField from '@mui/material/TextField';


export default function FeedBack()
{
    return(
        <Box className='grid grid-cols-2 gap-5 mx-28 my-5 p-5'>
            <Box className='flex flex-col space-y-8'>
                <Typography className="text-black text-left" style={{fontSize: 30, fontWeight: 600}}>FEEDBACK</Typography>
                <Typography className="text-gray-500 text-left" style={{fontSize: 20, fontWeight: 400}}>Bạn luôn có thể liên hệ với chúng tôi qua các thông tin liên hệ sau. Chúng tôi sẽ cố gắng hết sức để hỗ trợ bạn tốt nhất.</Typography>
                <div className='flex flex-row space-x-5'>
                    <img src={phone} alt='phone'/>
                    <Typography className="text-gray-500" style={{fontSize: 20, fontWeight: 400}}>+234 805 029 1265 , +234 907 228 0656</Typography>
                </div>
                <div className='flex flex-row space-x-5'>
                    <img src={mail} alt='mail'/>
                    <Typography className="text-gray-500" style={{fontSize: 20, fontWeight: 400}}>Info@gmail.com , Info@gmail.com</Typography>
                </div><div className='flex flex-row space-x-5'>
                    <img src={locate} alt='locate'/>
                    <Typography className="text-gray-500" style={{fontSize: 20, fontWeight: 400}}>129/23D Nguyen Trai Quan 5 tp My Tho</Typography>
                </div>
            </Box>
            <Box className='rounded-md flex flex-col justify-between p-5 space-y-5' style={{backgroundColor:'#EDEDED'}}>
                <TextField
                    autoFocus
                    size="small"
                    margin="dense"
                    fullWidth
                    placeholder="Vui lòng nhập tên"
                    label="Tên"
                    variant="outlined"
                    type="email"
                />
                <TextField
                    autoFocus
                    size="small"
                    margin="dense"
                    fullWidth
                    placeholder="Vui lòng nhập email"
                    label="Email"
                    variant="outlined"
                    type="email"
                />
                <TextField
                    autoFocus
                    size="small"
                    margin="dense"
                    fullWidth
                    placeholder="Hãy nhập feedback của bạn"
                    label="Feed back của bạn"
                    variant="outlined"
                    type="email"
                    multiline
                    rows={5}
                />
                <Box className='flex borderrounded-md items-center justify-end'>
                    <Button style={{backgroundColor:'#EDEDED', color:'gray'}}>
                        <Typography className="text-black" style={{fontSize: 20, fontWeight: 400, textTransform: 'none'}}>Gửi feedback</Typography>
                    </Button>
                </Box>
                
            </Box>
        </Box>
    )
}