export default function MemberDetail({params} : {params: {slug: string}}) {
    return (
        <div className="ml-64">
            {params.slug}
        </div>
    )
}