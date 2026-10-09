// WeBuz — window.WeBuz. React 18. Load tokens.css + bundle.css first.
type IconName = 'bus'|'star'|'gift'|'trophy'|'check'|'chat'|'map'|'phone'|'crown'|'coupon'|'share'|'pin'|'bell'|'user'|'arrowLeft'|'arrowRight'|'apple'|'play'|'search'|'alert'|'news'|'battery'|'route'|'clock'|'users'|'calendar'|'question'|'plus'|'navigation';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary'|'secondary'|'ghost'; size?: 'md'|'lg'; icon?: IconName; block?: boolean; href?: string; children: React.ReactNode; }
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string; }
export interface IconBadgeProps { icon: IconName; tone?: 'brand'|'teal'|'sun'|'soft'; size?: number; ring?: boolean; label?: string; }
export interface MascotProps { pose?: 'onibus'|'campeao'|'avatar'|'logo'; size?: number; alt?: string; className?: string; style?: React.CSSProperties; }
export interface PointsCardProps { value: number; label?: string; hint?: string; }
export interface LevelProgressProps { level: number; title?: string; previous?: number; current: number; goal: number; showMascot?: boolean; }
export interface MissionItemProps { title: string; icon?: IconName; points?: number; done?: boolean; }
export interface RewardCardProps { title: string; cost: number; icon?: IconName; cta?: string; onRedeem?: () => void; disabled?: boolean; featured?: boolean; }
export interface RankingRowProps { position: number; name: string; points: number; me?: boolean; }
export interface SegmentedTabsProps { items: string[]; value?: number; onChange?: (index: number) => void; label?: string; }
export interface StoreButtonProps { store: 'apple'|'google'; href?: string; }
export interface FeatureStepProps { icon: IconName; title: string; text: string; step?: number; }
export interface PhoneFrameProps { children: React.ReactNode; style?: React.CSSProperties; className?: string; }
export interface SiteHeaderProps { active?: string; links?: (string | [string, string])[]; cta?: string; href?: string; }
export interface HeroProps { title?: string; highlight?: string; text?: string; cta?: string; href?: string; stores?: ('google'|'apple')[]; art?: React.ReactNode; }
export interface WaveDividerProps { flip?: boolean; className?: string; }
export interface SiteFooterProps { columns?: [string, (string | [string, string])[]][]; tagline?: string; legal?: string; }
export interface LiveMapProps { line?: string; eta?: string | false; search?: boolean; className?: string; }
export interface AlertCardProps { title: string; line?: string; time?: string; confirmations?: number; icon?: IconName; }
export interface FeatureCardProps { icon: IconName; title: string; text: string; tone?: 'brand'|'teal'|'sun'|'soft'; }
export interface ProblemItemProps { icon?: IconName; children: React.ReactNode; }
export interface FaqItemProps { question: string; children: React.ReactNode; open?: boolean; }
export interface PageIntroProps { eyebrow?: string; crumb?: string; title: string; highlight?: string; text?: string; art?: React.ReactNode; }
export interface FinalCtaProps { title?: string; text?: string; cta?: string; href?: string; pose?: 'onibus'|'campeao'|'avatar'; }
