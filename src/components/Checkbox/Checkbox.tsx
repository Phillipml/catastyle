import type { WidthType, FontSizeType } from '@/types'
import { CheckInput, CheckLabel } from './styles'
import Text from '@/components/Text/Text'

export type CheckboxType = {
  id: string
  name: string
  checked?: boolean
  $disabled?: boolean
  children: string
  display?: string
  onClick?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & WidthType &
  FontSizeType

const Checkbox = ({
  id,
  name,
  checked,
  $disabled,
  children,
  display,
  $lgWidth,
  $mdWidth,
  $smWidth,
  $lgFontSize = 16,
  $mdFontSize = 16,
  $smFontSize = 16,
  onClick,
  onChange
}: CheckboxType) => (
  <CheckLabel
    htmlFor={id}
    display={display}
    $lgWidth={$lgWidth}
    $mdWidth={$mdWidth}
    $smWidth={$smWidth}
  >
    <CheckInput
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      disabled={$disabled}
      display={display}
      onClick={onClick}
      onChange={onChange}
    />
    <Text
      as="span"
      color="primary"
      $lgFontSize={$lgFontSize}
      $mdFontSize={$mdFontSize}
      $smFontSize={$smFontSize}
    >
      {children}
    </Text>
  </CheckLabel>
)

export default Checkbox
