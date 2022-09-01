import { useRouter } from "next/router";

const NslBypassCache = () => {
    const router = useRouter()
    console.log(router.query);
    return (
        <div>
            my account ??
        </div>
    );
}

export default NslBypassCache;
