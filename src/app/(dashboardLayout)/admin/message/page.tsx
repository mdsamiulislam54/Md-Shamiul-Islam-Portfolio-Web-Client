import MessageTable from "@/components/Table/MessageTable"
import { getMessages } from "./_actions"


const MessagePage = async() => {
    const messages = await getMessages()
  return (
    <div>
        <div>
            <MessageTable messages={messages}/>
        </div>
    </div>
  )
}

export default MessagePage