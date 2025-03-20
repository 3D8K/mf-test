import { AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@react-three/uikit-default";
import { Container, Input, Text } from "@react-three/uikit";


export default function Modal() {
  return (
    <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Text>Add new task</Text>
          </AlertDialogTitle>
          <AlertDialogDescription>
           <Input/>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <Text>Cancel</Text>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Text>Continue</Text>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
  )
}
