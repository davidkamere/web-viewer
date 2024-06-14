
import Link from "next/link"

const NavigationBar = () => {
    const links = [
        {href: '/', name: 'All Books'},
        {href: 'reading-list', name: 'Reading List'}
    ]

    return (
        <>
            {links.map(link => (
                <Link href={link.href} key={link.name}>{link.name}</Link>
            ))}
        </>
    )
}

export default NavigationBar