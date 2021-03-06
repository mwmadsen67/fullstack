class Api::CommentsController < ApplicationController
  before_action :require_login

  def index
    # @comments = Comment.where(video_id: params[:video_id])
    # render 'api/comments/index'
  end
  
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if current_user.id == comment.user_id
      comment.destroy
      render json: comment.id
    else
      render json: ["Could not destroy comment"], status: 401
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :video_id)
  end
end
