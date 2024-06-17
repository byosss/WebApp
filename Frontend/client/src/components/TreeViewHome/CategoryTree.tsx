import { Avatar, Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import pizzaCat from '../../Assets/pizza.jpg';


function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <ArrowForwardIosIcon
            className={className}
            style={{ ...style, display: "block", color: "black", right: -25 }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <ArrowBackIosIcon
            className={className}
            style={{ ...style, display: "block", color: "black", left: -25 }}
            onClick={onClick}
        />
    );
}

const list = [1,2,3,4,5,6,7,8];

export default function CategoryTree() {
    const settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box sx={{ px:5, justifyContent: 'center' }}>
            <Slider {...settings}>
                {list.map((item) => (
                <Box key={item} sx={{ display: 'block'}}>
                    <Avatar alt='pizza' src={pizzaCat}/>
                    <Typography>Pizza</Typography>
                </Box>
                ))}
            </Slider>
        </Box>
    )
}