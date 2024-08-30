type headerLinks = {
    title: string,
    href: string
    isMobile?: boolean;
}
export const headerLink:headerLinks[] = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Fitness',
        href: '/skyfitness/fitness'
    },
    {
        title:'Guide',
        href:'/skyfitness/guide'
    },
    {
        title: 'Help',
        href:'/skyfitness/help'
    },
    {
        title:'Login',
        isMobile: true,
        href:'/skyfitness/login'
    } 
]