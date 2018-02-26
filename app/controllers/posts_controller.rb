class PostsController < ApplicationController
  def show
    render component: 'Post', props: { post: { id: params[:id], body: 'foo bar' } }, prerender: true
  end
end
