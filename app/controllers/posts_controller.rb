class PostsController < ApplicationController
  def show
    render component: 'Post', props: { id: params[:id], body: 'foo bar' }, prerender: true
  end
end
