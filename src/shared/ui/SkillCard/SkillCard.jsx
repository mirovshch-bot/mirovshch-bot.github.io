import { SkillIcon } from "../../../entities/skill";
import styles from "./SkillCard.module.scss";

export const SkillCard = (props) => {
  const {
    title, 
    description, 
    icons = [], 
    iconsSecondRow = [],
    tags = [], 
    className = '',
    variant = 'default', // 'design' | 'animations' | 'cloud' | 'testing' | 'languages' | 'mobile' | 'git' | 'design-block'
    showDesignHeader = false,
  } = props;

  const cardClasses = [
    styles.skillCard,
    variant !== 'default' && styles[`skillCard${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    className
  ].filter(Boolean).join(' ')

  const renderIcons = (iconList) => {
    if (!iconList || iconList.length === 0) return null
    
    return iconList.map((iconName, index) => (
      <div key={index} className={styles.iconWrapper}>
        <SkillIcon name={iconName} />
      </div>
    ))
  }

  const renderTags = (tagList) => {
    if (!tagList || tagList.length === 0) return null
    
    return tagList.map((tag, index) => (
      <span key={index} className={styles.tag}>
        {tag}
      </span>
    ))
  }

  const hasIcons = icons.length > 0 || iconsSecondRow.length > 0
  const hasTags = tags.length > 0

  return (
    <div className={cardClasses}>
      {/* Иконки */}
      {hasIcons && (
        <div className={styles.iconsGrid}>
          {icons.length > 0 && (
            <div className={`${styles.iconsRow} ${variant === 'default' && iconsSecondRow.length > 0 ? styles.iconsRowRight : styles.iconsRowCentered}`}>
              {renderIcons(icons)}
            </div>
          )}
          {iconsSecondRow.length > 0 && (
            <div className={`${styles.iconsRow} ${styles.iconsRowCentered}`}>
              {renderIcons(iconsSecondRow)}
            </div>
          )}
        </div>
      )}

      {/* Специальный хедер для UI/UX карточки */}
      {variant === 'design-block' && showDesignHeader && (
        <div className={styles.designHeader}>
          <div className={styles.iconWrapper}>
            <SkillIcon name="figma" />
          </div>
          <div className={styles.designTags}>
            {tags.map((tag, index) => (
              <span key={index} className={`${styles.tag} ${styles.tagDesign}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Обычные теги (не для design-block) */}
      {variant !== 'design-block' && hasTags && (
        <div className={styles.tags}>
          {renderTags(tags)}
        </div>
      )}

      {/* Контент */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
    )
}

export default SkillCard;
