import Head from "next/head";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { auth, db } from "../../lib";
import { ChatProps } from "./chat.interface";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

export default function Chat({ chat, messages }: ChatProps) {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat?.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  )
}

export async function getServerSideProps(context: any) {
  const ref = db.collection("chats").doc(context.query.id);

  const messageRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();
  
  const messages = messageRes.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })).map(messages => ({  
    ...messages,
    timestamp: messages?.timestamp?.toDate()?.getTime()
  }));

  // PREP the chats
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data()
  }

  return {
    props: {
      messages: JSON.stringify(messages),
      chat
    }
  }
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;