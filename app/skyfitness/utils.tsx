const ImageAndText:ImageAndTextType = [
    {
        imageUrl: "/workout5.jpg",
        title:"Actively Working out",
        description:"Push your strength and improve muscle tone over 4 weeks—all without weights."
    },
    {
        imageUrl:"/workout4.jpg",
        title:"Stronger and Faster",
        description:"With our Nike+ workouts, you'll get the most out of your body while working out."
    },
    // {
    //     imageUrl:"/pink-sportwear.jpg",
    //     title:"Stay Healthy and Fit",
    //     description:"Get the best workouts and guidance from our Nike Master Trainers."
    // },
    {
        imageUrl:"/streching.jpg",
        title:"Get Ready to Train",
        description:"Discover new workouts, try community favourites, or find the right workout for you."
    },
    {
        imageUrl:"/lifting-weights.jpg",
        title:"Join Our Community",
        description:"Join our online community and connect with other fitness enthusiasts."
    },
    {
        imageUrl:"/jumping.jpg",
        title:"Embrace Your Passion",
        description:"Discover new workouts, try community favourites, or find the right workout for you."
    }
]

export default ImageAndText;
interface ImageAndText {
    imageUrl: string,
    title: string,
    description: string
}[]
export type ImageAndTextType = ImageAndText[]
