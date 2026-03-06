import { useRouter } from "next/router";

const HalamanSlug = () => {
    // const Router = useRouter();
    // console.log(Router); 
    const {query} = useRouter();
    return <div>
        <h1>Halaman Slug</h1>
        <br />
        <p>Slug: {query.slug}</p>
    </div>
};

export default HalamanSlug;
