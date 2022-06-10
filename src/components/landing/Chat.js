import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  TypingIndicator,
  MessageGroup
} from "@chatscope/chat-ui-kit-react";
import { Box, Container, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import User from '../../assets/user.png'
import CloseIcon from '@mui/icons-material/Close';

const Chat = () => {
  return (
    <Box component={'div'} className="chat">
      <ChatContainer>
        <ConversationHeader style={{ backgroundColor: 'white'}}>
        <ConversationHeader.Content style={{ paddingBottom: '.5rem'}}>
        <div style={{ display: 'flex', paddingTop: '1rem'}}>
            <ChatBubbleOutlineIcon />
            <Typography variant="body2" sx={{ fontWeight: 'bold', pl: 1}}>Live discussion</Typography> 
        </div>
        <Typography variant="body2" sx={{ color: 'orange', fontWeight: 'bold', pt: 1}}>Courtney Henry, Ronald Richards and 3 more</Typography>
        </ConversationHeader.Content>
        <ConversationHeader.Actions>
            <CloseIcon />
        </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList typingIndicator={<TypingIndicator content="Emily is typing" />}>
          
          {/* <MessageSeparator content="Today"  /> */}
          <Typography align="center" variant="body2" color={'textSecondary'} sx={{pt: 5}}>Today</Typography>
          <Container>
    <MessageGroup direction="incoming" sender="Cortney Henry" sentTime="just now">
    <Avatar src={User} name={"Emily"} />
    <MessageGroup.Messages>
     <Message 
        model={{
        message: `For athletes, high altitude produces two contradictory effects on performance. For explosive events.`,
        sentTime: "07:40am",
        sender: "Courtney Henry",
        direction: "incoming",
        position: "single"
      }}
      style={{
          paddingTop: '3rem',
          paddingLeft: '2rem'
      }}
      />
    </MessageGroup.Messages>
    <MessageGroup.Footer style={{ paddingTop: "1rem"}}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: "#000000"}}>Courtney Henry</Typography>
        <Typography variant="body2" sx={{ pl: 1}}>07:40am</Typography>
    </MessageGroup.Footer>
    </MessageGroup>
         
    <MessageGroup direction="incoming" sender="Ronald Richards" sentTime="07:40am">
    <Avatar src={User} name={"Ronald Richards"} />
    <MessageGroup.Messages>
     <Message 
        model={{
        message: `Physical space is often conceived in three linear dimension`,
        sentTime: "07:40am",
        sender: "Ronald Richards",
        direction: "incoming",
        position: "single"
      }}
      style={{
          paddingTop: '3rem',
          paddingLeft: '2rem'
      }}
      />
    <Message 
        model={{
        message: `Physical space is often conceived in three linear dimension`,
        sentTime: "07:40am",
        sender: "Ronald Richards",
        direction: "incoming",
        position: "single"
      }}
      style={{
          paddingLeft: '2rem'
      }}
      />
    </MessageGroup.Messages>
    <MessageGroup.Footer style={{ paddingTop: "1rem"}}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: "#000000"}}>Ronald Richards</Typography>
        <Typography variant="body2" sx={{ pl: 1}}>07:40am</Typography>
    </MessageGroup.Footer>
    </MessageGroup>

    <MessageGroup direction="incoming" sender="Ronald Richards" sentTime="07:40am">
    <Avatar src={User} name={"Ronald Richards"} />
    <MessageGroup.Messages>
     <Message 
        model={{
        message: `Physical space is often conceived in three linear dimension`,
        sentTime: "07:40am",
        sender: "Ronald Richards",
        direction: "incoming",
        position: "single"
      }}
      style={{
          paddingTop: '3rem',
          paddingLeft: '2rem'
      }}
      />
    <Message 
        model={{
        message: `Physical space is often conceived in three linear dimension`,
        sentTime: "07:40am",
        sender: "Ronald Richards",
        direction: "incoming",
        position: "single"
      }}
      style={{
          paddingLeft: '2rem'
      }}
      />
    </MessageGroup.Messages>
    <MessageGroup.Footer style={{ paddingTop: "1rem"}}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: "#000000"}}>Ronald Richards</Typography>
        <Typography variant="body2" sx={{ pl: 1}}>07:40am</Typography>
    </MessageGroup.Footer>
    </MessageGroup>
    <Message 
        model={{
        message: `Thus, in precise usage, the words breathing and ventilation`,
        sentTime: "07:40am",
        sender: "Ronald Richards",
        direction: "incoming",
        position: "single"
      }}
      style={{
          paddingLeft: '2rem',
          paddingTop: '2rem',
      }}
      />
          </Container>
        </MessageList>
        <MessageInput placeholder="Write your message" onAttachClick={("Add attachment button clicked")} />
      </ChatContainer>
  </Box>
  )
}

export default Chat