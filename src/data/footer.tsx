import {BlogTs, Footertype} from "../types/types.tsx";
const footerData:Footertype[] = [
    {
        src: "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
        title: "Free shipping",
        description: "It's not actually free; we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        src: "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
        title: "10-year warranty",
        description: "If it breaks in the first 10 years, we'll replace it. After that, you're on your own though.",
    },
    {
        src: "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
        title: "Exchanges",
        description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    }
];

export default footerData;
export const categoryData: Footertype[] = [
    {
        title: "Computers & Laptops",
        src: "https://i.ibb.co/74bZ8PH/cat-Computer.webp",
        path: '/laptops'
    },
    {
        title: 'Mobiles',
        src: "https://i.ibb.co/jgk59BL/catPhone.webp",
        path: '/mobiles'
    },
    {
        title: 'Sport Watches',
        src: "https://i.ibb.co/HdNVLzh/cat-Sport-Watch.webp",
        path: '/watches'
    },
    {
        title: 'Books',
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/800px-Open_book_nae_02.svg.png",
        path: '/books'
    },
    {
        title: 'KidsWear',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXQRPJkr4LO4LkaUIi2Fp_1q4LXArCX910Q&s",
        path: '/kidswear'
    },
    {
        title: 'WomensWear',
        src:'https://static.bershka.net/4/photos2/2024/V/0/1/p/0044/335/461/0044335461_2_24_0.jpg?imwidth=800&ts=1710256944556',
        path: '/womenswear'
    },
    {
        title: 'MensWear',
        src: "https://static.vecteezy.com/system/resources/thumbnails/023/605/941/small_2x/mens-cloth-logo-design-vector.jpg",
        path: '/menswear'
    },
    {
        title: 'Male FootWear',
        src: "https://img.freepik.com/premium-vector/men-s-shoes-logo-icon-design-illustration_586739-2843.jpg",
        path: '/malefootwear'
    },
    {
        title: 'Female FootWear',
        src: "https://www.shutterstock.com/image-vector/high-heel-shoe-glyph-icon-260nw-666912055.jpg",
        path: '/femalefootwear'
    },{
        title: 'Kids FootWear',
        src: "https://static.independent.co.uk/2023/06/16/12/New%20Project%20%282%29.jpg",
    path:'/kidsfootwear'
    }
];
export const blogData:BlogTs[]=[{
    title:'Apple debuts iPhone 16 Pro and iPhone 16 Pro Max',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RrbZKLTJupGVVRkJHFhZ8Xr6RyEsanygvJm2K_tZ5OZp8YZraYr2U2rW68WNUDi74dM&usqp=CAU'
    },{
        title:'Introducing Apple Watch Series 10',
        img:'https://www.apple.com/newsroom/images/2024/09/introducing-apple-watch-series-10/article/Apple-Watch-Series-10-hero-240909_big.jpg.large.jpg'
    },
    {
        title:'Apple introduces AirPods 4 with AirPods Pro 2',
        img:'https://www.apple.com/newsroom/images/2024/09/apple-introduces-airpods-4/article/Apple-AirPods-hero-240909_big.jpg.large.jpg'
    },
    {
        title:'Apple Intelligence comes to iPhone, iPad, and Mac starting next month',
        img:'https://www.apple.com/newsroom/images/2024/09/apple-intelligence-comes-to-iphone-ipad-and-mac-starting-next-month/article/Apple-Intelligence-starting-next-month_big.jpg.large.jpg'
    },
    {
       title:'Eight games join Apple Arcade, including Balatro+ and NBA 2K25 Arcade Edition',
        img:'https://www.apple.com/newsroom/images/2024/09/eight-games-join-apple-arcade-including-balatro-and-nba-2k25-arcade-edition/article/Apple-Arcade-hero_big.jpg.large.jpg'
    },
    {
        title:'Apple introduces groundbreaking health features to support conditions impacting billions of people',
        img:'https://www.apple.com/newsroom/images/2024/09/apple-introduces-groundbreaking-health-features/article/Apple-health-2-up-240909_big.jpg.large.jpg'
    }
]