export interface CountDownProps {
  id: number;
  seconds: number;
  onRightSwipe?: (id: number) => void;
}
