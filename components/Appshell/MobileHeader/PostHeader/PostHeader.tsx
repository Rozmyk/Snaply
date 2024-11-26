import { Flex, ActionIcon, Text } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
const PostHeader = () => {
	const router = useRouter()
	return (
		<Flex h='100%' justify='space-between' align='center' p='xs'>
			<ActionIcon
				size='lg'
				onClick={() => {
					router.push('/')
				}}>
				<IconChevronLeft size='lg' />
			</ActionIcon>
			<Text fz='lg' fw={600}>
				Comments
			</Text>
			<div></div>
		</Flex>
	)
}

export default PostHeader
