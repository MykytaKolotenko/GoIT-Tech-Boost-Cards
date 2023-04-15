import { useState } from 'react'
import { IUserPutQuery, useChangeFollowersMutation } from '../../Redux/userApi'
import MyCardUi from '../../UI/Card/MyCard'
import MyBtnUi from '../../UI/MyBtn/MyBtnUi'
import addCommaToNumber from '../../helpers/addCommaToNumber'
import IUser from '../../interface/IUser'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import customErrorMessage from '../../options/customErrorMessage'

const UserCard: React.FunctionComponent<IUser> = ({
	user,
	avatar,
	followers,
	tweets,
	id,
	subscribed
}) => {
	const [updateFollowers, { isError }] = useChangeFollowersMutation()
	const [isSubscribed, setIsSubscribed] = useState(subscribed)
	const [followersAmount, setIsfollowersAmount] = useState(followers)

	const handleClick = () => {
		if (isSubscribed) {
			const putData: IUserPutQuery = {
				id,
				subscribed: !isSubscribed,
				followers: followersAmount - 1
			}
			updateFollowers(putData)

			if (!isError) {
				setIsSubscribed(prev => !prev)
				setIsfollowersAmount(prev => prev - 1)
			} else {
				Notify.failure(customErrorMessage.putError)
			}

			return
		}

		if (!isSubscribed) {
			const putData: IUserPutQuery = {
				id,
				subscribed: !isSubscribed,
				followers: followersAmount + 1
			}
			updateFollowers(putData)

			if (!isError) {
				setIsSubscribed(prev => !prev)
				setIsfollowersAmount(prev => prev + 1)
			} else {
				Notify.failure(customErrorMessage.putError)
			}

			return
		}
	}

	const followersStringWithComma = addCommaToNumber(followersAmount)
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
