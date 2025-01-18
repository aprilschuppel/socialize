import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AddContactForm } from "../components/AddContactForm";

export default function Page () {
    return (
        <div className='flex justify-center items-center py-10'>
            <Card>
                <CardHeader className='font-bold'>
                    Add a new contact
                </CardHeader>
                <CardContent className='p-4'>
                    <AddContactForm />
                </CardContent>
            </Card>
        </div>
    )
}