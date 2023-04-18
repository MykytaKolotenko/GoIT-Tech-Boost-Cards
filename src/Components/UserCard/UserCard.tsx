import { useState, useCallback } from 'react'
import { IUserPutQuery, useChangeFollowersMutation } from '../../Redux/userApi'
import MyCardUi from '../../UI/Card/MyCard'
import MyBtnUi from '../../UI/MyBtn/MyBtnUi'
import addCommaToNumber from '../../helpers/addCommaToNumber'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import customErrorMessage from '../../options/customErrorMessage'

interface Props {
	user: string;
	avatar: string;
	followers: number;
	tweets: number;
	id: string;
	subscribed: boolean;
}

const UserCard = ({
	user,
	avatar,
	followers,
	tweets,
	id,
	subscribed
}: Props) => {
	const [updateFollowers, { isError }] = useChangeFollowersMutation()
	const [isSubscribed, setIsSubscribed] = useState(subscribed)
	const [followerCount, setFollowerCount] = useState(followers)

	const updateFollowerCount = useCallback(
		(count: number) => {
			setFollowerCount(count)
			setIsSubscribed(!isSubscribed)
		},
		[setIsSubscribed, isSubscribed]
	)

	const handleClick = useCallback(() => {
		const count = isSubscribed ? followerCount - 1 : followerCount + 1
		const putData: IUserPutQuery = {
			id,
			subscribed: !isSubscribed,
			followers: count
		}

		updateFollowers(putData)?.then(() => {
			if (!isError) {
				updateFollowerCount(count)
			} else {
				Notify.failure(customErrorMessage.putError)
			}
		})
	}, [
		id,
		isSubscribed,
		followerCount,
		updateFollowers,
		isError,
		updateFollowerCount
	])

	const followersStringWithComma = addCommaToNumber(followerCount)
	const tweetsStringWithComma = addCommaToNumber(tweets)

	return (
		<MyCardUi
			user={user}
			avatar={avatar}
			followers={followersStringWithComma}
			tweets={tweetsStringWithComma}
			id={id}
		>
			<MyBtnUi
				name={isSubscribed ? 'following' : 'follow'}
				isActive={isSubscribed}
				cb={handleClick}
			/>
		</MyCardUi>
	)
}

export default UserCard
