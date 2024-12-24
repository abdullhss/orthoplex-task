import ConnectToDB from '@/lib/ConnectToDb';
import User from '@/app/models/User';

export async function POST(req : Request) {
    await ConnectToDB();
    
        try {
            const param = await req.json(); 
            console.log(param.username);
            console.log(param.password);
            
            
            const user = await User.findOne({ username: param.username });
            console.log(user);
            if(!user){
                return new Response(JSON.stringify({ message: 'not found' }), { status: 404 });
            }
            if (user.password != param.password) {
                return new Response(JSON.stringify({ message: 'Invalid password' }), { status: 401 });
            }
            console.log("test");
            return new Response(JSON.stringify({ message: 'User Found', user }) ,{status : 200})    
        } catch (error) {
            return new Response("faild fetch user" , {status:500})
        }
    
}
