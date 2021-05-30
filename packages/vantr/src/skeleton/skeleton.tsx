import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, isObject } from '../_internal';
import Avatar, { SkeletonAvatarProps } from './avatar';
import Button from './button';
import Element from './element';
import Paragraph, { SkeletonParagraphProps } from './paragraph';
import Title, { SkeletonTitleProps } from './title';
import '@vantr/styles/lib/skeleton';

export interface SkeletonProps extends BaseProps {
  /**
   * 是否展示动画效果
   * @default true
   */
  active?: boolean;
  /**
   * 是否显示骨架屏, 传 `false` 时会展示子组件内容
   * @default true
   */
  loading?: boolean;
  /** 是否显示标题占位图 */
  title?: SkeletonTitleProps | boolean;
  /** 是否显示段落占位图 */
  paragraph?: SkeletonParagraphProps | boolean;
  /** 是否显示头像占位图 */
  avatar?: SkeletonAvatarProps | boolean;
  /** 段落和标题是否显示圆角 */
  round?: boolean;
}

const prefixCls = 'vanr-skeleton';

function getComponentProps<T>(props: T | boolean | undefined): T | {} {
  return isObject(props) ? props : {};
}

function getAvatarBasicProps(hasTitle: boolean, hasParagraph: boolean): SkeletonAvatarProps {
  return { shape: hasTitle && !hasParagraph ? 'square' : 'circle', size: 'md' };
}

function getTitleBasicProps(hasAvatar: boolean, hasParagraph: boolean): SkeletonTitleProps {
  return hasParagraph ? { width: hasAvatar ? '50%' : '38%' } : {};
}

function getParagraphBasicProps(hasAvatar: boolean, hasTitle: boolean): SkeletonParagraphProps {
  const props: SkeletonParagraphProps = {
    rows: !hasAvatar && hasTitle ? 3 : 2,
  };

  // Width
  if (!hasAvatar || !hasTitle) {
    props.width = '61%';
  }

  return props;
}

const Skeleton: React.FC<SkeletonProps> & {
  Title: typeof Title;
  Avatar: typeof Avatar;
  Button: typeof Button;
} = (props) => {
  const { className, style, active, loading, title, avatar, paragraph, round, children } = props;

  if (loading) {
    const hasTitle = !!title;
    const hasAvatar = !!avatar;
    const hasParagraph = !!paragraph;
    const classes = classNames(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-round`]: round,
      [className]: !!className,
    });

    // Avatar
    let avatarNode;
    if (hasAvatar) {
      const avatarProps: SkeletonAvatarProps = {
        ...getAvatarBasicProps(hasTitle, hasParagraph),
        ...getComponentProps(avatar),
      };

      avatarNode = (
        <div className={`${prefixCls}-header`}>
          <Element prefixCls={`${prefixCls}-avatar`} {...avatarProps} />
        </div>
      );
    }

    let contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      let $title;
      if (hasTitle) {
        const titleProps: SkeletonTitleProps = {
          ...getTitleBasicProps(hasAvatar, hasParagraph),
          ...getComponentProps(title),
        };

        $title = <Title {...titleProps} />;
      }

      // Paragraph
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps: SkeletonParagraphProps = {
          ...getParagraphBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(paragraph),
        };

        paragraphNode = <Paragraph {...paragraphProps} />;
      }

      contentNode = (
        <div className={`${prefixCls}-content`}>
          {$title}
          {paragraphNode}
        </div>
      );
    }

    return (
      <div className={classes} style={style}>
        {avatarNode}
        {contentNode}
      </div>
    );
  }
  return <>{children}</>;
};

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {
  loading: true,
  active: true,
  title: true,
  avatar: false,
  paragraph: true,
};

Skeleton.Title = Title;
Skeleton.Avatar = Avatar;
Skeleton.Button = Button;

export default Skeleton;
