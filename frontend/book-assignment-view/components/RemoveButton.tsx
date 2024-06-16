import { useReadingList } from "@/hooks/useReadingList"
import { Button } from '@mui/material';
import { ButtonProps } from "@/utils/types";

const RemoveButton = (props: ButtonProps) => {
    const {book: bookDetails} = props
    const { removeFromReadingList } = useReadingList()

    return (
        <Button
            onClick={() => removeFromReadingList(bookDetails)}
            variant="contained"
            sx={{
                width: '100%',
                marginTop: "1rem",
                color: 'white',
                borderRadius: 16, 
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#F76434',
                '&:hover': { backgroundColor: '#E75424' },
            }}
        >
            Remove from List
        </Button>
    )
}

export default RemoveButton