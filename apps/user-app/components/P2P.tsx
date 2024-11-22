import { Button } from "@repo/ui/button"

export function P2P(){

    return (
        <div className=" w-72 rounded-2xl shadow-xl bg-white flex justify-center items-center">
            <div className="my-4">
                <h2 className="text-xl font-semibold border-b-2">Send</h2>
                <div className="mt-2">Number</div>
                <input type="text" placeholder="mobile no." className="border-2 rounded-md p-1 outline-none w-f"/>
                <div className="mt-2">Amount</div>
                <input type="text" placeholder="Enter amount" className="border-2 rounded-md p-1 outline-none w-f" />
                <div className="mt-4 text-center">
                <Button> Send </Button>
                </div>
            </div>
        </div>
    )
}