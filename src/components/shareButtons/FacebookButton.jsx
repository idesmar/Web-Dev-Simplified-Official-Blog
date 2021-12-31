import useShareDialog from "./useShareDialog"
import Icon from "./Icon"

export default function FacebookButton({ url }) {
  const { openShareDialog } = useShareDialog(
    "https://www.facebook.com/sharer/sharer.php",
    { u: url }
  )

  return (
    <button className="share-icon" onClick={() => openShareDialog()}>
      <Icon
        color="#3b5998"
        path="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
      />
    </button>
  )
}
