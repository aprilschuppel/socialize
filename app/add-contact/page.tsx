import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ContactInput } from "../components/ContactInput";

export default function Page () {
    return (
        <div className='flex justify-center items-center py-10'>
            <Card>
                <CardHeader className='font-bold'>
                    Add a new contact
                </CardHeader>
                <CardContent className='p-4'>
                    <ContactInput />
                </CardContent>
            </Card>
        </div>
    )
}