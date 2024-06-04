export default function CampaignDetail({params}: {params: {slug: string}}) {
    return (
        <div className="ml-64">
            {params.slug}
        </div>
    )
}