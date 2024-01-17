import {
	Card,
	CardBody,
	Divider,
	Flex,
	GridItem,
	Heading,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SimpleGrid,
	Stack,
	Stat,
	StatHelpText,
	StatLabel,
	Text,
	Link as ChakraLink,
	useDisclosure, Box, Avatar,
	Input, Button, Spinner
} from '@chakra-ui/react'
import {Link} from "react-router-dom"
// import backgroundImg from '../assets/naturopathy.jpg'
import {useEffect, useState, useRef} from 'react'
import {API_HOST} from "../utils/config.js";

const Chat = () => {

	const [userText, setUserText] = useState("");
	const [chatMessages, setChatMessages] = useState([]);

	const [initialRestoreComplete, setInitialRestoreComplete] = useState(false)

	const [responseLoading, setResponseLoading] = useState(false);

	const addChatMessage = (messageText, messageAuthorType) => {
		setChatMessages((prevMessages) => {
			return [
				...prevMessages,
				{
					messageAuthorType: messageAuthorType,
					messageText: messageText,
					messageTimestamp: new Date()
				}
			]
		})
	}

	const lastChatRef = useRef(null)

	const onSubmitClick = async () => {
		try {
			// const endpointURL = new URL("/diagnostics", API_HOST)

			endpointURL.searchParams.set("userText", userText)

			const fetchedData = await fetch(
				endpointURL,
				{
					method: "GET",
					headers: {
						"Access-Control-Allow-Origin": "*"
					}
				}
			)

			const fetchedJSON = await fetchedData.json()
			if (fetchedJSON.status === "ok"){
				addChatMessage(fetchedJSON.message, "SYSTEM")
			}

		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		const storedData = window.localStorage.getItem("ayucare-messages") || "[]"
		const parsedData = JSON.parse(storedData)
		if (Array.isArray(parsedData)){
			const isValidData = parsedData.every((dataObj) => {
				const {messageTimestamp, messageText, messageAuthorType} = dataObj
				return (
					messageText !== undefined &&
					messageAuthorType !== undefined &&
					messageTimestamp !== undefined
				)
			})

			if (isValidData){
				console.log("Data is valid")
				setChatMessages(parsedData)
				setInitialRestoreComplete(true)
			}
		}
	}, [])

	useEffect(() => {
		const messageDump = JSON.stringify(chatMessages)

		if (initialRestoreComplete){
			window.localStorage.setItem("ayucare-messages", messageDump)
		}
	}, [chatMessages])

	useEffect(() => {
		if (lastChatRef.current){
			window.scrollTo(
				0,
				lastChatRef.current.offsetTop
			)
		}
	}, [lastChatRef])

	return (
		<>
			<Flex
				justifyContent={"space-around"}
				alignItems={"center"}
				width="100vw"
				// backgroundImage={`url(${backgroundImg})`}
				backgroundSize="cover"
				bgRepeat={'no-repeat'}
				style={{opacity: 2}}
				objectFit={'fill'}
			>
				<Flex
                    py={4}
                    bgColor={"rgba(0, 0, 0, 0.8)"}
                    width={'100vw'}
                    height={'100%'}
                    justifyContent={"center"}
                    minHeight={"40vh"}
                >
					<Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
						<Text
                            fontSize={"3.5rem"}
                            fontWeight={"bold"}
                            color="#FFFFFF"
                            align={'center'}
                        >
							Chat with AyuCare Bot
						</Text>
						<Text
                            fontSize="1.5rem"
                            fontWeight="bold"
                            color="#FFFFFF"
                            align={'center'}
                        >
							<Link to={'/'}>Home</Link>
                            {" > "}
                            <Link to={''}>Chat</Link>
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Box height={"10vh"} />
			<Flex
				width={"75vw"}
				height={"100vh"}
			>
				<Box
					css={{
						flexGrow: 1,
						border: "1px solid darkgrey",
						m: 4,
						borderRadius: 16,
						display: 'flex'
					}}
				>
					<Stack spacing={2} css={{
						p: 16,
						flexGrow: 1,
						display: 'flex'
					}}>
						<Stack direction={"row"} spacing={2} align={"center"} justifyContent={"space-between"} css={{
							borderBottom: "1px solid darkgrey",
							padding: 8,
						}}>
							<Stack direction={"row"} spacing={2} align={"center"} css={{
								padding: 8,
							}}>
								<Avatar name={"AC"}/>
								<Heading fontSize={"1.2rem"}>
									{" | AyuCare Bot - Your pocket digital assistant"}
								</Heading>
							</Stack>
							<Button
								variant={"ghost"}
								onClick={() => {
									setChatMessages([])
								}}
								color={"red"}
							>
								{
									responseLoading ? (
										<Spinner />
									) : (
										"Clear Chat"
									)
								}
							</Button>
						</Stack>
						<Stack css={{flexGrow: 1, overflowY: 'scroll', padding: 16}} spacing={4}>
							{
								chatMessages.map((messageObj, messageIdx) => {
									const {messageTimestamp, messageText, messageAuthorType} = messageObj
									if (messageAuthorType === "USER"){
										return (
											<Flex
												direction={"row"}
												justifyContent={"space-between"}
												alignItems={"center"}
												key={`${messageAuthorType}.${messageText}.${messageTimestamp.toString()}`}
												gap={16}
												{...(messageIdx === chatMessages.length - 1 ? {ref: lastChatRef} : {})}
											>
												<Text
													css={{
														whiteSpace: "nowrap"
													}}
													as={"sub"}
												>
													{new Date(messageTimestamp).toLocaleTimeString()}
												</Text>
												<Box
													css={{
														borderRadius: 16,
														border: "1px solid darkgrey",
														padding: 16,
														borderBottomRightRadius: 0
													}}
												>
													{messageText}
												</Box>
											</Flex>
										)
									} else {
										return (
											<Flex
												direction={"row"}
												justifyContent={"space-between"}
												alignItems={"center"}
												key={`${messageAuthorType}.${messageText}.${messageTimestamp.toString()}`}
												gap={16}
												{...(messageIdx === chatMessages.length - 1 ? {ref: lastChatRef}: {})}
											>
												<Box
													css={{
														borderRadius: 16,
														border: "1px solid darkgrey",
														padding: 16,
														borderBottomLeftRadius: 0
													}}
												>
													{messageText}
												</Box>
												<Text
													css={{
														whiteSpace: "nowrap"
													}}
													as={"sub"}

												>
													{new Date(messageTimestamp).toLocaleTimeString()}
												</Text>
											</Flex>
										)
									}
								})
							}
						</Stack>
						<Stack direction={"row"} css={{padding: 24, borderTop: "1px solid darkgrey"}}>
							<Input
								placeholder={"Enter your message here"}
								value={userText}
								onChange={(e) => {
									setUserText(e.target.value)
								}}
							/>
							<Button
								variant={"ghost"}
								onClick={() => {
									addChatMessage(userText, "USER")
									setUserText("")
									setResponseLoading(true)
									// onSubmitClick().then(() => {
									// 	setResponseLoading(false)
									// })
								}}
								isDisabled={responseLoading || userText === ""}
							>
								{
									responseLoading ? (
										<Spinner />
									) : (
										"Send Message"
									)
								}
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Flex>
			<Box height={"10vh"} />
		</>
	)
}

export default Chat