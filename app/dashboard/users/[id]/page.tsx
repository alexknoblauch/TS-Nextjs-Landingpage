export default async function UserDetails({params}: {params: Promise<{id: string}>}){
    const {id} = await params
    return <p>User {id}</p>
}