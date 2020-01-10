import Head from 'Next/Head'



const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>
                    {props.title || "next.js"}
                </title>
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;