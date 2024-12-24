import ConnectToDB from '@/lib/ConnectToDb';
import User from '@/app/models/User';

export async function POST(req: Request ) {
    await ConnectToDB();
    
        try{
            const param = await req.json() ;
            const user = await User.create({
                username : param.username ,
                password : param.password
            }) ;
            console.log(user);
            return new Response(JSON.stringify({ message: 'User created successfully', user }) ,{status : 200})    
        }
        catch (error) {
            return new Response("faild fetch user" , {status:500})
        }
    
}